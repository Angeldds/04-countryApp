import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTable } from './country-table';

describe('CountryTable', () => {
  let component: CountryTable;
  let fixture: ComponentFixture<CountryTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
