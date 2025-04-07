export type TypeStatusOperation = 'created' | 'in_progress' | 'success' | 'failed' | 'precreated';

export interface PaymentForm {
    operationData:              OperationData;
    listAvailablePaymentMethod: string[];
    status: TypeStatusOperation;
}

export interface OperationData {
    paymentDetailsData:    PaymentDetailsData;
    dateAdded:             Date;
    dateUpdated:           Date;
    status:                string;
    idTransactionMerchant: string;
    amount:                number;
    currency:              string;
    tokenPaymentForm:      string;
    redirectGeneralURL:    string;
    redirectSuccessURL:    string;
    redirectFailURL:       string;
    bankName:              null;
}

export interface PaymentDetailsData {
    nameMediator:     null;
    paymentMethod:    null;
    bankName:         null;
    number:           null;
    numberAdditional: null;
    qRcode:           null;
}
