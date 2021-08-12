"""CRUD operations"""

from model import db, User, Movie, Ratings, connect_to_db

#Functions start here
def create_user(email, password):
    """Create and return a new user."""

    user = User(email=email, password=password)

    db.session.add(user)
    db.session.commit()

    return user


if __name__ == '__main__':
    from server import app
    connect_to_db(app)
    db.create_all() #not in the lab instructions Part 2
    #needed to create the tables