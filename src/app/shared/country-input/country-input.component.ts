import { Component, OnInit, Input } from '@angular/core';
import { countries } from 'src/app/dashboard/dummy-data/countries';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss']
})
export class CountryInputComponent implements OnInit {
  phoneNumber: number;
  @Input('placeholder') placeholder: string;
  @Input('countries') countries: Array<any>;
  selectedCountry = countries[0]
  constructor() {
    window.onclick = function(event) {
      if (!event.target.matches('.dropdown')) {
        var dropdowns = document.getElementsByClassName("input__dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('input__dropdown-content--show')) {
            openDropdown.classList.remove('input__dropdown-content--show');
          }
        }
      }
    }
   }

  ngOnInit(): void {
  }

  showDropDown() {
    document.getElementById("myDropdown").classList.toggle("input__dropdown-content--show");
  }

  selectCountry(country){
    console.log(country)
    this.selectedCountry = country;
  }

}
