<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/users', 'User::index');
$routes->get('/user/create', 'User::create');
$routes->get('/user/edit/(:num)', 'User::edit/$1');
$routes->get('/user/delete/(:num)', 'User::delete/$1');
$routes->post('/user/store', 'User::store');

