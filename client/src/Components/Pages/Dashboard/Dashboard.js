import React from 'react';
import './Dashboard.css';
import { Grid, Segment } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <Grid columns='equal'>
            <Grid.Row stretched>
                <Grid.Column>
                    <Segment>1</Segment>
                    <Segment>2</Segment>
                </Grid.Column>
                <Grid.Column width={9}>
                    <Segment>
                        <Segment>1</Segment>
                        <Segment>1</Segment>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}