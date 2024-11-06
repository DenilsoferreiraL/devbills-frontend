import { ResponsivePie } from "@nivo/pie";
import { useMemo } from "react";
import { theme } from "../../styles/theme";
import { FormatCurrency } from "../../utils/format-currency";

const apiData = [
    {
        _id: '1',
        title: 'Alimentação',
        amount: 30000,
        color: '#ff33bb',
    },
    {
        _id: '2',
        title: 'Compras',
        amount: 15000,
        color: '#ff0000',
    },
    {
        _id: '3',
        title: 'Streaming',
        amount: 10000,
        color: '#00ff00',
    },
];

type ChartData = {
    id: string;
    label: string;
    externalId: string;
    value: number;
    color: string;
};

export function CategoriesPieChart() {
    const data = useMemo<ChartData[]>(() => {
        const chartData: ChartData[] = apiData.map((item) => ({
            id: item.title,
            label: item.title,
            externalId: item._id,
            value: item.amount,
            color: item.color,
        }));
        return chartData
    }, []);

    return (
        <ResponsivePie data={data}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            colors={({ data }) => data.color}
            margin={{ top: 20 }}
            valueFormat={FormatCurrency}
            theme={{
                text: {
                    fontFamily: 'Lexend',
                    fontSize: 12
                },
                tooltip: {
                    container: {
                        backgroundColor: theme.colors.black,
                        padding: 16,
                        color: theme.colors.white,
                        fontSize: 12,
                        borderRadius: 4
                    }
                }
            }}
            legends={[
                {
                    anchor: 'top',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: -20,
                    itemWidth: 120,
                    itemHeight: 16,
                    itemTextColor: theme.colors.neutral,
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 12,
                    symbolShape: 'circle'
                }
            ]}
        />
    )

}
