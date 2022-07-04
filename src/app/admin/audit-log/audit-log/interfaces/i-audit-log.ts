export interface IAuditLog {
    id: number;
    userId?: number;
    identity: string;
    useCaseName: string;
    executionDateTime: Date;
    isAuthorized: boolean;
    data: string;
}