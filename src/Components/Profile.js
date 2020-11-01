import React, { Component } from "react";
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';

class Profile extends Component {
    user = JSON.parse(this.props.userdata);

    render() {
        return (
            <Card style={{maxWidth: '50vh'}}>
                <CardContent>
                    {this.user.images.length
                    && <img src={this.user.images[0].url} style={{ maxWidth: '50%', borderRadius: '10%' }} alt="Profile Picture" />
                    || <AccountCircle style={{ fontSize: 200 }}/>}
                    <Typography color="textSecondary" gutterBottom>
                        User Name
                        </Typography>
                    <Typography variant="h5" component="h2">
                        {this.user.display_name}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Email
                        </Typography>
                    <Typography variant="h5" component="h2">
                        {this.user.email}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Country
                        </Typography>
                    <Typography variant="h5" component="h2">
                        {this.user.country}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Followers
                        </Typography>
                    <Typography variant="h5" component="h2">
                        {this.user.followers.total}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

}

const mapStateToProps = (state) => ({
    userdata: state.userdata,
});

export default connect(mapStateToProps)(Profile);