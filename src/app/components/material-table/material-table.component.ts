import { Component, ViewChild } from '@angular/core';
import { Product } from 'src/app/common/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { FormControl } from '@angular/forms';
import { RequestService } from 'src/app/services/request-service.service';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})


export class MaterialTable {

  title = 'material-table'

  displayedColumns = ['id', 'brand', 'equipment'];
  dataSource!: MatTableDataSource<Product>;
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(1000);
  products: Product[] = [];
  products2: Product[] = [];

  private paginator: any = MatPaginator;
  private sort: any = MatSort;

  @ViewChild(MatSort) set MatSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild('dataPaginator') set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(private service: RequestService) {

    this.service.getProduct(100)
      .subscribe(      // GET data from random-data-api
        data => {
          console.log('Product Categories=' + JSON.stringify(data))   // Console log all 100 pieces of data
          this.products = data
          this.service.getProduct(20)
            .subscribe(   // GET data from random-data-api
              data => {
                console.log('Product Categories=' + JSON.stringify(data))     // Console log 20 pieces of data
                this.products2 = data;
                this.dataSource = new MatTableDataSource(this.products.concat(this.products2)); //combines both product arrays
                this.setDataSourceAttributes()
              })
        }
      )
  }

  setDataSourceAttributes() {  // formats data to be sorted and paginated
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.paginator && this.sort) {
      this.applyFilter('');
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
