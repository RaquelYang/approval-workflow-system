import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError, timeout } from 'rxjs';

import { API_BASE_URL } from '../tokens/api-base-url.token';

export type ApprovalStatus = 'pending' | 'approved' | 'reviewing' | 'rejected';

export interface ApprovalRequest {
    readonly id: number;
    readonly title: string;
    readonly requester: string;
    readonly department: string;
    readonly amount: number;
    readonly status: ApprovalStatus;
    readonly submittedAt: string;
}

/**
 * Approval API service, responsible for reading approval workflow fake API data.
 */
@Injectable({ providedIn: 'root' })
export class ApprovalApiService {
    private readonly httpClient = inject(HttpClient);
    private readonly apiBaseUrl = inject(API_BASE_URL);

    public readonly approvalRequestsEndpoint = `${this.apiBaseUrl}/approvalRequests`;

    /**
     * Gets approval requests from the local json-server API.
     *
     * @returns Approval request stream from the fake API.
     */
    public getApprovalRequests(): Observable<readonly ApprovalRequest[]> {
        return this.httpClient.get<readonly ApprovalRequest[]>(this.approvalRequestsEndpoint).pipe(
            timeout(5000),
            catchError((error: unknown) =>
                throwError(() => new Error(this.resolveErrorMessage(error))),
            ),
        );
    }

    private resolveErrorMessage(error: unknown): string {
        if (error instanceof Error && error.message.length > 0) {
            return `無法取得 approvalRequests：${error.message}`;
        }

        return '無法取得 approvalRequests，請確認 json-server 是否已啟動。';
    }
}
