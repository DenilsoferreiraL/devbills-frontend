import { ResponsiveBar } from '@nivo/bar'
import { useMemo } from 'react'
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { theme } from '../../styles/theme';
import { FormatCurrency } from '../../utils/format-currency';
import { FinancialEvolution } from '../../services/api-types';

dayjs.locale('pt-br');

type ChartData = {
    month: string
    Saldo: number
    Receitas: number
    Gastos: number
}

type FinancialEvolutionBarChartProps = {
    financialEvolution?: FinancialEvolution[]
}

export function FinancialEvolutionBarChart({ financialEvolution }: FinancialEvolutionBarChartProps) {
    const data = useMemo<ChartData[]>(() => {
        if (financialEvolution?.length) {
            const chartData: ChartData[] = financialEvolution.map((item) => {
                const [year, month] = item._id;
                return {
                    month: dayjs(`${year}-${month}-01`).format('MMM'),
                    Saldo: item.balance,
                    Receitas: item.incomes,
                    Gastos: item.expenses
                };
            });
            return chartData;
        }
        return []
    }, [financialEvolution]);

    return (
        <ResponsiveBar
            data={data}
            keys={['Saldo', 'Receitas', 'Gastos']}
            colors={[theme.colors.info, theme.colors.primary, theme.colors.error]}
            indexBy={'month'}
            groupMode='grouped'
            enableLabel={false}
            enableGridY={false}
            margin={{ bottom: 28, left: 80 }}
            padding={0.2}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Mês',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 0,
                format: FormatCurrency,
            }}
            theme={{
                text: {
                    fontFamily: 'Lexend',
                    fontSize: 12,
                },
                axis: {
                    ticks: {
                        text: {
                            fill: theme.colors.white
                        }
                    }
                },
                tooltip: {
                    container: {
                        backgroundColor: theme.colors.black,
                        padding: 16,
                        color: theme.colors.white,
                        fontFamily: 'Lexend',
                        fontSize: 12,
                        borderRadius: 4
                    }
                }
            }}
            valueFormat={FormatCurrency}
        />
    );
}
