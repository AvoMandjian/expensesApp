import { Doughnut } from "react-chartjs-2";

export default function PieChart(props) {

    const categories = props.categoryData.map(item => item.category_name);
    const total = props.categoryData.map(item => parseInt(item.total));
    var colors = [];
    for (var i = 0; i <= total.length; i++) {
        var r = Math.floor(Math.random() * 200);
        var g = Math.floor(Math.random() * 200);
        var b = Math.floor(Math.random() * 200);
        var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        colors.push(color);
    }

    console.log(total.length)
    return (
        <Doughnut
            data={{
                datasets: [
                    {
                        data: total,
                        backgroundColor: colors,

                    }
                ],
                labels: categories
            }}
            options={{
                responsive: true,
                maintainAspectRatio: true
            }}
        />
    );

}

