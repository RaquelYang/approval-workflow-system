import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';

import { ApprovalApiService, ApprovalRequest } from './core/services/approval-api.service';

interface ApprovalApiViewModel {
    readonly status: 'loading' | 'success' | 'error';
    readonly requests: readonly ApprovalRequest[];
    readonly errorMessage: string | null;
}

@Component({
    selector: 'app-root',
    imports: [CurrencyPipe],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    private readonly approvalApiService = inject(ApprovalApiService);

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
                    requests: [],
                    errorMessage: error instanceof Error ? error.message : '發生未知 API 錯誤。',
                } satisfies ApprovalApiViewModel),
            ),
        ),
        {
            initialValue: {
                status: 'loading',
                requests: [],
                errorMessage: null,
            } satisfies ApprovalApiViewModel,
        },
    );

    protected readonly totalAmount = computed((): number =>
        this.apiState().requests.reduce((total: number, request: ApprovalRequest): number => {
            return total + request.amount;
        }, 0),
    );
}
