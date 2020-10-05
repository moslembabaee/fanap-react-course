import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import cards from './blogPosts'

const useStyles = makeStyles((theme) => ({

  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  cardHeader: { "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "row", "boxSizing": "border-box" },
  cardHeaderLogo: {"backgroundColor":"#e8e8e8","borderRadius":"50%","width":"30px","height":"30px","textAlign":"center","margin":"10px","padding":"2px","paddingTop":"5px"},
  cardHeaderLS: {
  },
  cardHeaderContent: {
  },
  cardHeaderText: {
  },
  cardDate: {
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Learning React
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <div className={classes.cardHeader}>
                      <div className={classes.cardHeaderLogo}>
                        <div className={classes.cardHeaderLS}>
                          d
                        </div>
                      </div>
                      <div className={classes.cardHeaderContent}>
                        <h3 className={classes.cardHeaderText}>
                        {card.title}
                        </h3>
                        <div className={classes.cardDate}>
                          1399
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardMedia
                    className={classes.cardMedia}
                    image={process.env.PUBLIC_URL + '/postImages/' + card.cover}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}