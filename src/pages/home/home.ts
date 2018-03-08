import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PersonProvider } from '../../providers/person/person';
import { PerformanceDataProvider } from '../../providers/performance-data/performance-data';
import { ResultsPage } from '../results/results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};

  constructor(
    public navCtrl: NavController, 
    public person: PersonProvider, 
    public performanceData: PerformanceDataProvider, 
    public modalCtrl: ModalController
  ) {
    this.user = { distance: 1000, age: 28, gender: 'female' };
  }

  calculate(user) {
    this.person.doAssessment(user.distance);
    this.performanceData
      .saveData({ performance_data: { data: { message: this.person.assessmentMessage } } })
      .subscribe(data => console.log(data));
  }

  showResults() {
    this.modalCtrl.create(ResultsPage).present();
  
  }
}
