"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let DatatableComponent = class DatatableComponent {
    constructor() {
        this.enableFilter = false;
        this.columns = [];
        this.query = "";
    }
    addColumn(column) {
        this.columns.push(column);
    }
    getData() {
        if (this.query !== "") {
            return this.filteredList;
        }
        else {
            return this.dataset;
        }
    }
    //============================FILTERING FOR SEARCH==============================
    filter() {
        this.filteredList = this.dataset.filter(function (el) {
            var result = "";
            for (var title in el) {
                result += el[title];
            }
            return result.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], DatatableComponent.prototype, "dataset", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], DatatableComponent.prototype, "enableFilter", void 0);
DatatableComponent = __decorate([
    core_1.Component({
        selector: 'datatable',
        template: `
    <input type="text" class="form-control" *ngIf=enableFilter [(ngModel)]=query 
         (keyup)=filter() placeholder="Filter" />
         
      <table  class="table table-bigboy">
        <thead>
            <th *ngFor="let column of columns" class="td-name">{{column.header}}</th>
            <th >Actions</th>
        </thead>
        <tbody *ngFor="let row of getData()">
	  <tr>
	    <td *ngFor="let column of columns" class="td-name">{{row[column.value]}}</td>
	    
	    
	    
	    <td class="td-actions">
	    <button type="button" rel="tooltip" data-placement="left" title="View Post" class="btn btn-info btn-simple btn-icon">
                                        <i class="fa fa-image"></i>
                                    </button>
                                    <button type="button" rel="tooltip" data-placement="left" title="Edit Post" class="btn btn-success btn-simple btn-icon">
                                        <i class="fa fa-edit"></i>
                                    </button>
                                    <button type="button" rel="tooltip" data-placement="left" title="Remove Post" class="btn btn-danger btn-simple btn-icon ">
                                        <i class="fa fa-times"></i>
                                    </button>
	    </td>
	    
	    
	  </tr>
      
        </tbody>
      </table>
  `
    }), 
    __metadata('design:paramtypes', [])
], DatatableComponent);
exports.DatatableComponent = DatatableComponent;
//# sourceMappingURL=datatable.component.js.map