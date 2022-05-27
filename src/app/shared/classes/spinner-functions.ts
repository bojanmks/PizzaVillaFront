export class SpinnerFunctions {
    private static spinnerElementId: string = 'page-spinner-wrapper';
    private static showSpinnerClass: string = 'show-spinner';

    static showSpinner(): void {
        document.getElementById(this.spinnerElementId).classList.add(this.showSpinnerClass);
    }

    static hideSpinner(): void {
        document.getElementById(this.spinnerElementId).classList.remove(this.showSpinnerClass);
    }
}