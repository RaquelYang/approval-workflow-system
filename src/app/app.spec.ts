import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { App } from './app';
import { ApprovalApiService, ApprovalRequest } from './core/services/approval-api.service';

const APPROVAL_REQUESTS: readonly ApprovalRequest[] = [
    {
        id: 1,
        title: '採購筆電設備',
        requester: 'Raquel Chen',
        department: 'IT',
        amount: 128000,
        status: 'pending',
        submittedAt: '2026-04-28T09:30:00.000Z',
    },
    {
        id: 2,
        title: '行銷活動預算',
        requester: 'Mia Lin',
        department: 'Marketing',
        amount: 86000,
        status: 'approved',
        submittedAt: '2026-04-29T14:15:00.000Z',
    },
];

const approvalApiServiceStub: Pick<
    ApprovalApiService,
    'approvalRequestsEndpoint' | 'getApprovalRequests'
> = {
    approvalRequestsEndpoint: 'http://localhost:3000/approvalRequests',
    getApprovalRequests: (): Observable<readonly ApprovalRequest[]> => of(APPROVAL_REQUESTS),
};

describe('App', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [App],
            providers: [{ provide: ApprovalApiService, useValue: approvalApiServiceStub }],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render API title', async () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        await fixture.whenStable();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Approval Workflow Fake API');
    });

    it('should render approval request metrics', async () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        await fixture.whenStable();
        const compiled = fixture.nativeElement as HTMLElement;

        expect(compiled.querySelector('.metrics strong')?.textContent?.trim()).toBe('2');
        expect(compiled.textContent).toContain('採購筆電設備');
        expect(compiled.textContent).toContain('$214,000');
    });
});
