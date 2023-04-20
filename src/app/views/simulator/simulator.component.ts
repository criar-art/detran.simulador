import { Component, OnInit } from '@angular/core';

import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import * as CryptoJS from 'crypto-js'
import { SHA256, AES } from 'crypto-js'
import { shuffle } from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { DialogDeleteComponent } from 'src/app/components/modals/dialog-delete/dialog-delete.component'
import { DialogStartComponent } from 'src/app/components/modals/dialog-start/dialog-start.component'
import { questionsOne, questionsTwo, questionsThree } from 'src/app/core/questions'

type reactTypes = {
  choice: string;
  value: string;
}

type questionTypes = {
  show: boolean;
  reacts: reactTypes[];
  ask: string;
  photo?: string;
}

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  // Loading page response
  loading: boolean = false;

  // ID level
  id: number = Number(this.route.snapshot.paramMap.get('id'));
  level?: string;

  // Start or End exam with check localStorage result and name
  start: boolean = Boolean(localStorage.getItem(`BR4S1L${this.id}`));
  end: boolean = Boolean(localStorage.getItem(`BR4S1L${this.id}R3SULT`));

  // Result encode and localStorage
  result: string | null = localStorage.getItem(`BR4S1L${this.id}R3SULT`);
  result_deco: string | CryptoJS.lib.WordArray | null = this.result && AES.decrypt(this.result, `M3MSS4G3${this.id}`);
  result_show: string = this.result_deco && JSON.parse(this.result_deco?.toString(CryptoJS.enc.Utf8));
  result_correct: number = 0;

  // Name encode and localStorage
  name_local: string | null = localStorage.getItem(`BR4S1LN0M3`)
  name_deco: string | CryptoJS.lib.WordArray | null = this.name_local && AES.decrypt(this.name_local, `M3MSS4G3`);
  name: string = this.name_deco && this.name_deco?.toString(CryptoJS.enc.Utf8) || '';

  // Logic examResponse and questions with reacts and choice user select
  examResponse: string[] = [];
  questions: questionTypes[] = this.id == 1 ? questionsOne : this.id == 2 ? questionsTwo : questionsThree;
  reacts: reactTypes[] = [];
  reactChoice?: string;


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // ID level
      this.id = Number(params.get("id"));
      this.level = this.id == 1 ? 'simples' : this.id == 2 ? 'médio' : 'avançado';

      // Start exam with localStorage name true
      this.start = Boolean(localStorage.getItem(`BR4S1L${this.id}`));

      // Check result localStorage and show result
      this.result = localStorage.getItem(`BR4S1L${this.id}R3SULT`);
      this.result_deco = this.result && AES.decrypt(this.result, `M3MSS4G3${this.id}`);
      this.result_show = this.result_deco && JSON.parse(this.result_deco?.toString(CryptoJS.enc.Utf8));

      // Check result correct validation
      if (this.result_show) {
        // Reset result correct
        this.result_correct = 0;

        // Loop for check result correct
        for(let item of this.result_show) {
          item == 'lucas' ? this.result_correct++ : null;
        }
      }

      // Get questions from level and id
      this.questions = this.id == 1 ? questionsOne : this.id == 2 ? questionsTwo : questionsThree;

      // Shuffle all questions and reacts
      this.questions = shuffle(this.questions);
            this.questions.map(question => {
        if(question.show == true) {
          question.show = false;
        }
      });
      this.reacts = shuffle(this.questions[0].reacts);

      // Show the first question
      this.questions[0].show = true;
    })
  }

  openDialogDelete() {
    this.dialog.open(DialogDeleteComponent).afterClosed().subscribe(result => {
      if (result) this.clean();
    });
  }

  openDialogStart() {
    this.dialog.open(DialogStartComponent).afterClosed().subscribe(result => {
      if (result) this.alertWorking();
    });
  }

  nameEncode() {
    const askStorage: CryptoJS.lib.CipherParams = AES.encrypt(this.name, `M3MSS4G3`);
    localStorage.setItem(`BR4S1LN0M3`, askStorage.toString());
  }

  askReturn(question: questionTypes) {
    let choice = '';
    if (question) {
      for(let item of question.reacts) {
        if (item.value == 'lucas') {
          choice = item.choice;
        }
      }
    }
    return choice;
  }

  alertWorking() {
    this.loading = true;
    this.clean();

    setTimeout(() => {
      this.start = true;
      this.questions[0].show = true;
      this.reacts = shuffle(this.questions[0].reacts);
      localStorage.setItem(`BR4S1L${this.id}`, SHA256(`M3MSS4G3${this.id}`).toString());
      this.loading = false;
    }, 500);
  }

  nextAsk(index: number) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;

      if (this.reactChoice) {
        localStorage.removeItem(`BR4S1L${this.id}`);

        this.examResponse.push(this.reactChoice);

        const askStorage: CryptoJS.lib.CipherParams = AES.encrypt(JSON.stringify(this.examResponse), `M3MSS4G3${this.id}`);

        localStorage.setItem(`BR4S1L${this.id}R3SULT`, askStorage.toString());

        if(this.questions.length == index + 1) {
          this.questions[index].show = false;
          this.reacts = [];
          this.reactChoice = '';
          this.start = false;
          this.end = true;
          this.result = askStorage.toString();
          this.result_deco = this.result && AES.decrypt(this.result, `M3MSS4G3${this.id}`);
          this.result_show = JSON.parse(this.result_deco?.toString(CryptoJS.enc.Utf8));

          for(let item of this.result_show) {
            item == 'lucas' ? this.result_correct++ : null;
          }

        } else {
          this.reacts = shuffle(this.questions[index + 1].reacts);
          this.questions[index].show = false;
          this.questions[index + 1].show = true;
          this.reactChoice = '';
        }
      }
    }, 500);
  }

  clean() {
    localStorage.removeItem(`BR4S1L${this.id}R3SULT`);
    this.examResponse = [];
    this.result = '';
    this.result_deco = '';
    this.result_show = '';
    this.result_correct = 0;
  }
}
