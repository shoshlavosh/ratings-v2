"""CRUD operations"""

from model import db, User, Movie, Ratings, connect_to_db

#Functions start here
def create_user(email, password):
    """Create and return a new user."""

    user = User(email=email, password=password)

    db.session.add(user)
    db.session.commit()

    return user

def create_movie(title, overview, release_date, poster_path):
    """Create and return a new movie."""

    movie = Movie(title=title,
                    overview=overview,
                    release_date=release_date, #format '2002, 4, 3'
                    poster_path=poster_path
                    )

    db.session.add(movie)
    db.session.commit()

    return movie       


def create_rating(score, movie, user):
    """Create and return a new movie rating."""

    rating = Ratings(score=score, 
                    movie=movie,
                    user=user)

    db.session.add(rating)
    db.session.commit()

    return rating


if __name__ == '__main__':
    from server import app
    connect_to_db(app)
    # db.create_all() #not in the lab instructions Part 2
    # #needed to create the tables