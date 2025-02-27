import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-http-client',
  imports: [FormsModule, JsonPipe],
  templateUrl: './api-http-client.component.html',
  styleUrl: './api-http-client.component.css'
})
export class APIHttpClientComponent implements OnInit {

  departmantObj:any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }
  departData:any [] = [];

  http = inject(HttpClient);

  ngOnInit(): void{
    this.getDepartment();
  }

  onEdit(data : any){
    this.departmantObj = data;
  }

  onSave() {
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.departmantObj).subscribe((res:any) => {
      debugger;
      if (res.result) {
        alert("Department Created Successfully!");
        this.getDepartment();
      } else {
        alert(res.message);
      }
    });
  }

  onUpdate(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.departmantObj).subscribe((res:any) => {
      debugger;
      if (res.result) {
        alert("Department Updated Successfully!");
        this.getDepartment();
      } else {
        alert(res.message);
      }
    });
  }

  onDelete(id:number){
    const isDelete = confirm("Sure do you want to Delete the department");
    if (isDelete){
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res:any) => {
        debugger;
        if (res.result) {
          alert("Department Deleted Successfully!");
          this.getDepartment();
        } else {
          alert(res.message);
        }
      });
    }
  }

  getDepartment(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((resp:any) =>{
      this.departData = resp.data;
    });
  }
}
