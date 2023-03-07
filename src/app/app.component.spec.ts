import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableOverviewExample } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TableOverviewExample
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TableOverviewExample);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'api-call-angular'`, () => {
    const fixture = TestBed.createComponent(TableOverviewExample);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('api-call-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TableOverviewExample);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('api-call-angular app is running!');
  });
});
