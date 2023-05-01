import { QString } from "./qString";

class DualSlider {
    qString;
    sliderName;
    constructor(sliderName: string) {
        this.qString = new QString();
        this.sliderName = sliderName;
    }

    controlMinInput(minRange: HTMLInputElement, minNumber: HTMLInputElement, maxNumber: HTMLInputElement, controlSlider: HTMLInputElement) {
        const [from, to] = this.getParsed(minNumber, maxNumber);
        this.fillSlider(minNumber, maxNumber, 'var(--color-white)', 'var(--color-accent)', controlSlider);
        if (from > to) {
            minRange.value = `${to}`;
            minNumber.value = `${to}`;
        } else {
            minRange.value = `${from}`;
        }

        const maxValue = maxNumber.value;
        const minValue = minNumber.value;
        this.qString.delQueryKey(this.sliderName);
        this.qString.setQueryParams(this.sliderName, `${minValue}, ${maxValue}`);
    }

    controlMaxInput(maxRange: HTMLInputElement, minNumber: HTMLInputElement, maxNumber: HTMLInputElement, controlSlider: HTMLInputElement) {
        const [from, to] = this.getParsed(minNumber, maxNumber);
        this.fillSlider(minNumber, maxNumber, 'var(--color-white)', 'var(--color-accent)', controlSlider);
        this.setToggleAccessible(maxNumber, maxRange);
        if (from <= to) {
            maxRange.value = `${to}`;
            maxNumber.value = `${to}`;
        } else {
            maxNumber.value = `${from}`;
        }

        const maxValue = maxNumber.value;
        const minValue = minNumber.value;
        this.qString.delQueryKey(this.sliderName);
        this.qString.setQueryParams(this.sliderName, `${minValue}, ${maxValue}`);
    }

    controlMinRange(minRange: HTMLInputElement, maxRange: HTMLInputElement, minNumber: HTMLInputElement, maxNumber: HTMLInputElement) {
        const [from, to] = this.getParsed(minRange, maxRange);
        this.fillSlider(minRange, maxRange, 'var(--color-white)', 'var(--color-accent)', maxRange);
        if (from > to) {
            minRange.value = `${to}`;
            minNumber.value = `${to}`;
        } else {
            minNumber.value = `${from}`;
        }

        const maxValue = maxNumber.value;
        const minValue = minNumber.value;
        this.qString.delQueryKey(this.sliderName);
        this.qString.setQueryParams(this.sliderName, `${minValue}, ${maxValue}`);
    }

    controlMaxRange(minRange: HTMLInputElement, maxRange: HTMLInputElement, maxNumber: HTMLInputElement, minNumber: HTMLInputElement) {
        const [from, to] = this.getParsed(minRange, maxRange);
        this.fillSlider(minRange, maxRange, 'var(--color-white)', 'var(--color-accent)', maxRange);
        this.setToggleAccessible(maxRange, maxRange);
        if (from <= to) {
            maxRange.value = `${to}`;
            maxNumber.value = `${to}`;
        } else {
            maxNumber.value = `${from}`;
          maxRange.value = `${from}`;
        }

        const maxValue = maxNumber.value;
        const minValue = minNumber.value;
        this.qString.delQueryKey(this.sliderName);
        this.qString.setQueryParams(this.sliderName, `${minValue}, ${maxValue}`);
    }

    getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
        const from = parseInt(currentFrom.value, 10);
        const to = parseInt(currentTo.value, 10);
        return [from, to];
    }

    fillSlider(from: HTMLInputElement, to: HTMLInputElement, sliderColor: string, rangeColor: string, controlSlider: HTMLInputElement) {
        const rangeDistance = +to.max - +to.min;
        const fromPosition = +from.value - +to.min;
        const toPosition = +to.value - +to.min;
        controlSlider.style.background = `linear-gradient(
          to right,
          ${sliderColor} 0%,
          ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
          ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
          ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
          ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
          ${sliderColor} 100%)`;
    }

    setToggleAccessible(currentTarget: HTMLInputElement, maxRange: HTMLInputElement) {
        if (Number(currentTarget.value) <= 0 ) {
            maxRange.style.zIndex = '2';
        } else {
            maxRange.style.zIndex = '0';
        }
    }

    init(minRange: HTMLInputElement, maxRange: HTMLInputElement) {
        this.fillSlider(minRange, maxRange, 'var(--color-white)', 'var(--color-accent)', maxRange);
        this.setToggleAccessible(maxRange, maxRange);
    }
}

export {DualSlider};