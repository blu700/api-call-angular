import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'app/common/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { FormControl } from '@angular/forms';
import { RequestService } from 'app/services/request-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})


export class MaterialTable implements OnInit {

  title = 'material-table'

  displayedColumns = ['id', 'home', 'name', 'species'];
  dataSource!: MatTableDataSource<Product>;
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(1000);
  products: Product[] = [];

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

  constructor(private service: RequestService, private route: ActivatedRoute) {

    this.service.getProduct()
      .subscribe(
        (data: Product[]) => {
          this.products = data
          console.log('Product Categories=' + JSON.stringify(data))
          this.dataSource = new MatTableDataSource(this.products);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.setDataSourceAttributes()
          if (this.paginator && this.sort) {
            this.applyFilter('');
          }
        }
      )
  }
  ngOnInit(): void {
  }

  setDataSourceAttributes() {  // formats data to be sorted and paginated
 
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
