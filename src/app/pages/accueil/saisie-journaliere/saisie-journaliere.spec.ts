import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieJournaliere } from './saisie-journaliere';

describe('SaisieJournaliere', () => {
  let component: SaisieJournaliere;
  let fixture: ComponentFixture<SaisieJournaliere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaisieJournaliere],
    }).compileComponents();

    fixture = TestBed.createComponent(SaisieJournaliere);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
