import React from "react";

export default function DataTables({ data, columns }) {
	const [records, setRecords] = React.useState(data || []);
    const [currentSort, setCurrentSort] = React.useState({});

	const _handleSort = (column, order = "asc") => {
		let sortedData = [...records].sort((a, b) => {
			let sortA = a[column]?.toLowerCase();
			let sortB = b[column]?.toLowerCase();
			if (sortA < sortB && order=='asc' || sortA > sortB && order=='desc') return -1;
			if (sortA > sortB && order=='asc' || sortA < sortB && order=='desc') return 1;
			return 0;
		});
		setRecords(sortedData);
        setCurrentSort({column, order})
	};

    const _findOrder = (column) => {
        return currentSort.column != column.value ? 'asc' : (currentSort.order == 'asc' ? 'desc' : 'asc')
    }

	return (
		<div className="row">
			<div className="col-12">
				<table className="table">
					<thead className="thead-light">
						<tr>
							{columns.map((column) => (
								<th scope="col" key={column.value}>
									{column.label} <i className="fa-solid fa-sort" onClick={_ => _handleSort(column.value, _findOrder(column))} />
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{records.map((record, index) => (
							<tr key={index}>
								{columns.map((col) => (
									<td key={index + col.value}>{record[col.value]}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
