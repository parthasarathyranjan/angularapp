import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefileComponent } from './createfile.component';

describe('CreatefileComponent', () => {
  let component: CreatefileComponent;
  let fixture: ComponentFixture<CreatefileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatefileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
