export function FormatCurrency(value: number) {
    return (
        new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL'
        }).format(value / 100)
    )
}