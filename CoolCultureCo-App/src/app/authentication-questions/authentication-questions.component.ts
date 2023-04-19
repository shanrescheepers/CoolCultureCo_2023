import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MaterialModule } from 'src/material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-questions',
  templateUrl: './authentication-questions.component.html',
  styleUrls: ['./authentication-questions.component.scss']
})
export class AuthenticationQuestionsComponent {
  gelatoAuthAnswer = new FormControl('');
  gelatoAuthResponse = new FormControl('');
  constructor(private router: Router) {
  }

  verifyAuthAnswer() {
    this.gelatoAuthResponse.setValue('Oreo');
    if (this.gelatoAuthAnswer.value.toLowerCase() == "oreo") {
      this.gelatoAuthResponse.setValue("Correct! You're definitely a Gelato Lover <3")
      console.log("Works");
      this.router.navigate(['/dashboard']);
    }
    else {
      this.gelatoAuthResponse.setValue("Wrong answer! Don't melt, you have another try... ")
      console.log("Loser");
    }

  }


  ngOnInit(): void {
  }

}
