-- PostgreSQL: Create campaigns table
CREATE TABLE IF NOT EXISTS campaigns (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    clicks INTEGER NOT NULL,
    cost NUMERIC(10, 2) NOT NULL,
    impressions INTEGER NOT NULL
);

-- Insert 10 fake campaigns
INSERT INTO campaigns (name, status, clicks, cost, impressions) VALUES
('Summer Sale', 'Active', 150, 45.99, 1000),
('Black Friday', 'Paused', 320, 89.50, 2500),
('Diwali Blast', 'Active', 275, 67.25, 1850),
('New Year Bonanza', 'Active', 410, 125.00, 3200),
('Spring Collection', 'Paused', 185, 52.30, 1420),
('Festive Offers', 'Active', 298, 78.90, 2100),
('Mega Monday', 'Active', 342, 95.75, 2680),
('Weekend Special', 'Paused', 167, 48.60, 1150),
('Flash Sale', 'Active', 453, 138.20, 3850),
('Holiday Season', 'Active', 389, 112.45, 3050)
ON CONFLICT DO NOTHING;





