import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar2 from '../components/globalComponents/Navbar2';
import Footer2 from '../components/globalComponents/Footer2';
import 'tachyons';

const styles = {
  card: {
    maxWidth: 300
  },
  media: {
    height: 200
  }
};

function AboutUs(props) {
  const { classes } = props;
  return (
    <div>
      <Navbar2 />
      <div id="AboutUs">
        <div className="AboutUsCards">
          <section className="tc grow dib f3-ns no-underline black-90 pa4">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia className={classes.media} image="" title="LauraFoto" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Laura Sochaczewski
                  </Typography>
                  <Typography component="p">Ipsum blablablablabalbala</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button>
                  <a
                    class="link near-black hover-silver dib mh3 tc"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/laura-mso"
                    title="GitHub">
                    <svg
                      class="dib h2 w2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      stroke-linejoin="round"
                      stroke-miterlimit="1.414">
                      <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" />
                    </svg>
                    <span class="f6 db">GitHub</span>
                  </a>
                </Button>
                <Button>
                  <a
                    class="link hover-silver near-black dib mh3 tc"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/laura-sochaczewski-70863b121/"
                    title="LinkedIn">
                    <svg
                      class="dib h2 w2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      stroke-linejoin="round"
                      stroke-miterlimit="1.414">
                      <path
                        d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
                        fill-rule="nonzero"
                      />
                    </svg>
                    <span class="f6 db">LinkedIn</span>
                  </a>
                </Button>
              </CardActions>
            </Card>
          </section>
          <section className="tc grow dib f3-ns no-underline black-90 pa4">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia className={classes.media} image="" title="CamilleFoto" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Camille Charteau
                  </Typography>
                  <Typography component="p">kjhkjhgljhvhvfgcjtfkzu</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button>
                  <a
                    class="link near-black hover-silver dib mh3 tc"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Campalo"
                    title="GitHub">
                    <svg
                      class="dib h2 w2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      stroke-linejoin="round"
                      stroke-miterlimit="1.414">
                      <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" />
                    </svg>
                    <span class="f6 db">GitHub</span>
                  </a>
                </Button>
                <Button>
                  <a
                    class="link hover-silver near-black dib mh3 tc"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/camille-charteau/"
                    title="LinkedIn">
                    <svg
                      class="dib h2 w2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      stroke-linejoin="round"
                      stroke-miterlimit="1.414">
                      <path
                        d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
                        fill-rule="nonzero"
                      />
                    </svg>
                    <span class="f6 db">LinkedIn</span>
                  </a>
                </Button>
              </CardActions>
            </Card>
          </section>
          <section className="tc grow dib f3-ns no-underline black-90 pa4">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://drive.google.com/uc?id=1RPS8iypYQMKidFsdtxPlSmQ3RJrefEcr"
                  title="RaphaelFoto"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Raphael Lautenbacher
                  </Typography>
                  <Typography component="p">
                    Raphael is a former professional sportsmen in skydiving. After his sports career
                    he studied business psychology. The limitations and focus on marketing and tools
                    to prettify statistics brought him away from this sector. After a 6 month stop
                    as
                    {/* a Account Mananger in the field of IT he entered a new way to create his future
                  career as a developer of unknown destination. He is passionate, and always was
                  about IT/Technology/Innovation. In his view digitalisation, especially Blockchain
                  and Crypto is the future to encapsulate big data and AI in a sustainable way for
                  the people. The Wild Code School Campus makes it possible to develop his skillset
                  and create a foundation that enables to go down this new path further... */}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button>
                  <a
                    class="link near-black hover-silver dib mh3 tc"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Datingel"
                    title="GitHub">
                    <svg
                      class="dib h2 w2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      stroke-linejoin="round"
                      stroke-miterlimit="1.414">
                      <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" />
                    </svg>
                    <span class="f6 db">GitHub</span>
                  </a>
                </Button>
                <Button>
                  <a
                    class="link hover-silver near-black dib mh3 tc"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/raphael-lautenbacher-4940a6171/"
                    title="LinkedIn">
                    <svg
                      class="dib h2 w2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      stroke-linejoin="round"
                      stroke-miterlimit="1.414">
                      <path
                        d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
                        fill-rule="nonzero"
                      />
                    </svg>
                    <span class="f6 db">LinkedIn</span>
                  </a>
                </Button>
              </CardActions>
            </Card>
          </section>
        </div>
        <Footer2 />
      </div>
    </div>
  );
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutUs);
