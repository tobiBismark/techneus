-- Clean up existing data and create admin user
DELETE FROM user_roles;
DELETE FROM profiles;
DELETE FROM purchases;
DELETE FROM contact_submissions;

-- Create admin profile
INSERT INTO profiles (user_id, full_name, company) 
VALUES ('7b112099-cf0a-4880-97a8-c5f525999692', 'Admin User', 'Your Company');

-- Set admin role
INSERT INTO user_roles (user_id, role) 
VALUES ('7b112099-cf0a-4880-97a8-c5f525999692', 'admin');