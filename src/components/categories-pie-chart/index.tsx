import { ResponsivePie } from "@nivo/pie";
import { useMemo } from "react";

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
        amount: 70000,
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
        <ResponsivePie data={data} />
    )

}
