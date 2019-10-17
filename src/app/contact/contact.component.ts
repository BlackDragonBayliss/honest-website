import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { postData, respData} from './postdataObj';
import { DataService } from './data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  data:string;
  posData:postData;
  resultData: respData;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

    /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `Thank you very much for contacting us!`;
    alert(allInfo); 
    this.sendData(this.name, this.email, this.message)
  }

  sendData(name: string, email: string, message: string) {
    this.posData = new postData();
    this.posData.request_type = "emailContact";
    this.posData.name = name;
    this.posData.email = email;
    this.posData.message = message;
    this.dataService.addPost(this.posData).subscribe((res : respData)=>{
        this.resultData = res;
        console.log(this.resultData.id);
        this.data =this.resultData.id + "-" + this.resultData.title;
      });
  }
}
