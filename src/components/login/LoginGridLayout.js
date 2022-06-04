import React from "react";
import { Dimmer, Grid, GridRow, GridColumn, Loader } from "semantic-ui-react";

export default function LoginGridLayout({ image, form, loading }) {
	return (
		<div>
			<Grid padded textAlign="center">
				<GridRow className="='login">
					<GridColumn width={16}>
						{loading === true && (
							<Dimmer active inverted>
								<Loader inverted content="Loading" />
							</Dimmer>
						)}
						{image}
						<br />
						{form}
					</GridColumn>
				</GridRow>
			</Grid>
		</div>
	);
}
