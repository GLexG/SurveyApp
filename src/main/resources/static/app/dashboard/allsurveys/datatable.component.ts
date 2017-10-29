import {Http, Response} from '@angular/http';
import {Injectable, Component, Input} from '@angular/core';
import {ColumnComponent} from './column.component';

@Component({
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
})
export class DatatableComponent {

    @Input() dataset;
    @Input() enableFilter = false;
    columns: ColumnComponent[] = [];
    query = "";
    filteredList;

    addColumn(column){
        this.columns.push(column);
    }

    getData(){
        if(this.query !== ""){
            return this.filteredList;
        }else{
            return this.dataset;
        }
    }

    //============================FILTERING FOR SEARCH==============================
    filter(){
        this.filteredList = this.dataset.filter(function(el){
            var result="";
            for(var title in el){
                result+= el[title];
            }
            return result.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }
}