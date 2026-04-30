import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';

import { ApprovalApiService, ApprovalRequest } from './core/services/approval-api.service';

type ApprovalApiStatus = 'loading' | 'success' | 'error';

interface ApprovalApiViewModel {
    readonly status: ApprovalApiStatus;
    readonly requests: readonly ApprovalRequest[];
    readonly errorMessage: string | null;
}

const EMPTY_APPROVAL_REQUESTS: readonly ApprovalRequest[] = [];

const INITIAL_API_STATE: ApprovalApiViewModel = {
    status: 'loading',
    requests: EMPTY_APPROVAL_REQUESTS,
    errorMessage: null,
};

@Component({
    selector: 'app-root',
    imports: [CurrencyPipe],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    private readonly approvalApiService = inject(ApprovalApiService);

    protected readonly approvalRequestsEndpoint = this.approvalApiService.approvalRequestsEndpoint;

    protected readonly apiState = toSignal(
        this.approvalApiService.getApprovalRequests().pipe(
            map(
                (requests: readonly ApprovalRequest[]): ApprovalApiViewModel => ({
                    status: 'success',
                    requests,
                    errorMessage: null,
                }),
            ),
            catchError((error: unknown) =>
                of({
                    status: 'error',
                    requests: EMPTY_APPROVAL_REQUESTS,
                    errorMessage: error instanceof Error ? error.message : '發生未知 API 錯誤。',
                } satisfies ApprovalApiViewModel),
            ),
        ),
        {
            initialValue: INITIAL_API_STATE,
        },
    );

    protected readonly totalAmount = computed((): number =>
        this.apiState().requests.reduce((total: number, request: ApprovalRequest): number => {
            return total + request.amount;
        }, 0),
    );
}
