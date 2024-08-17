import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToasterLibraryComponent } from './my-toaster-library.component';

describe('MyToasterLibraryComponent', () => {
  let component: MyToasterLibraryComponent;
  let fixture: ComponentFixture<MyToasterLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyToasterLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyToasterLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
