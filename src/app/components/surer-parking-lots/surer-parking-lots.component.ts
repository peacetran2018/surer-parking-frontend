import { Component, OnInit } from '@angular/core';
import { ParkingService } from 'src/app/shared/services/parking/parking.service';
import { ParkingLotsResponse, CarParkData } from 'src/app/shared/models/Response/ParkingLotsResponse';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-surer-parking-lots',
  templateUrl: './surer-parking-lots.component.html',
  styleUrls: ['./surer-parking-lots.component.css']
})
export class SurerParkingLotsComponent implements OnInit {
  parkingModel: CarParkData[] = [];
  paginationModel: CarParkData[] = [];
  searchForm: FormGroup;
  dateTime: string = "";
  loading = true;
  paginationMaxSize = 10;
  nextText = "Next";
  prevText = "Previous";
  searchCarParkNo = "";
  constructor(private parkingSerivce: ParkingService, private formBuilder: FormBuilder, private datePipe: DatePipe, private userService: UserService) { 
    this.searchForm = this.formBuilder.group({
      date: [new Date()],
      time: [new Date()]
    })
    
  }

  ngOnInit(): void {
    this.getCarParkingData();
    let navigatorUserAgent = navigator.userAgent;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigatorUserAgent))
    {
      this.paginationMaxSize = 5;//AnTran@2021-06-27: Detect user is using brower from which device
      this.nextText = ">";
      this.prevText = "<";
    }
  }

  get fSearch() { return this.searchForm.controls; }

  getCarParkingData(){
    this.dateTime = this.datePipe.transform(this.fSearch.date.value, 'yyyy-MM-dd') + "T" + this.datePipe.transform(this.fSearch.time.value, 'hh:mm:ss');
    this.loading = true;
    this.parkingSerivce.getParkingLots(this.dateTime).subscribe(res => {
      this.parkingModel = res.items[0].carpark_data;
      this.paginationModel = this.parkingModel.slice(0, 10);
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    })
  }

  onSearch() {
    this.getCarParkingData();
  }
  
  pageChanged(event: PageChangedEvent): void {
    event.itemsPerPage = 10;
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.paginationModel = this.parkingModel.slice(startItem, endItem);
  }

  filterCarParkNo(){
    if(this.searchCarParkNo === ""){
      this.ngOnInit();
    }
    else{
      this.paginationModel = this.paginationModel.filter(x =>{
        return x.carpark_number.toLocaleLowerCase().match(this.searchCarParkNo.toLocaleLowerCase());
      })
      this.parkingModel.length = this.paginationModel.length;
    }
  }
}
