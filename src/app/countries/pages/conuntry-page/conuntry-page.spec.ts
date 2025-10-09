import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConuntryPage } from './conuntry-page';

describe('ConuntryPage', () => {
  let component: ConuntryPage;
  let fixture: ComponentFixture<ConuntryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConuntryPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConuntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
