from sqlalchemy import text
from database import engine


def init_database():
    """Initialize PostgreSQL database with sample data"""
    try:
        # Read SQL file
        with open('campaigns.sql', 'r') as f:
            sql_script = f.read()

        # Execute SQL commands
        with engine.connect() as conn:
            # Split by semicolon and execute each statement
            for statement in sql_script.split(';'):
                if statement.strip():
                    conn.execute(text(statement))
            conn.commit()

        print("✅ PostgreSQL database initialized successfully with sample data!")
    except Exception as e:
        print(f"❌ Error initializing database: {e}")
        raise


if __name__ == "__main__":
    init_database()


