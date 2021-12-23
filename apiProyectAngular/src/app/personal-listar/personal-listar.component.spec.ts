import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalListarComponent } from './personal-listar.component';

describe('PersonalListarComponent', () => {
  let component: PersonalListarComponent;
  let fixture: ComponentFixture<PersonalListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
