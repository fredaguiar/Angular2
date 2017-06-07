import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadStatusPanelComponent } from './upload-status-panel.component';

describe('UploadStatusPanelComponent', () => {
  let component: UploadStatusPanelComponent;
  let fixture: ComponentFixture<UploadStatusPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadStatusPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadStatusPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
