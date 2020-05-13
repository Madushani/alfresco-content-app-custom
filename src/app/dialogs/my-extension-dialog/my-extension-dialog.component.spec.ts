import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExtensionDialogComponent } from './my-extension-dialog.component';

describe('MyExtensionDialogComponent', () => {
  let component: MyExtensionDialogComponent;
  let fixture: ComponentFixture<MyExtensionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyExtensionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExtensionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
