import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {of} from 'rxjs';

import {ProductSearchComponent} from '../product-search/product-search.component';
import {ProductService} from '../product.service';
import {PRODUCTS} from '../mock-products';

import {DashboardComponent} from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let heroService;
  let getProductsSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    heroService = jasmine.createSpyObj('ProductService', ['getProducts']);
    getProductsSpy = heroService.getProducts.and.returnValue(of(PRODUCTS));
    TestBed
        .configureTestingModule({
          declarations: [DashboardComponent, ProductSearchComponent],
          imports: [RouterModule.forRoot([])],
          providers: [
            {provide: ProductService, useValue: heroService},
          ]
        })
        .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Products" as headline', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('Top Products');
  });

  it('should call heroService', waitForAsync(() => {
       expect(getProductsSpy.calls.any()).toBe(true);
     }));

  it('should display 4 links', waitForAsync(() => {
       expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
     }));
});
