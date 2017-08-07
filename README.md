# Mercedes-Benz Production System – Webportal

## Prerequisites
- Ruby 2.4.1
- Redis
- PostgreSQL
- git (obviously)

## Install & Setup
```sh
git clone git@github.com:polycaster/mps.git
cd mps
bundle
bundle exec rails webpacker:yarn_install
```

## Starting all services
(In _development_ environment)
```sh
bin/start
```

That's basically it. However, if you want more fine-control, 
you can start all involved services separately:

**Rails**
```sh
tty1$ bundle exec rails s
```

**Sidekiq**
```sh
tty2$ bin/sidekiq -v -C config/sidekiq.yml
```

**Webpack Development Server**
```sh
tty2$ bin/webpack-dev-server
```

## Application Components 
- **User Interface** http://localhost:3000/ui/...
- **JSON REST API** http://localhost:3000/api/...
- **Job Processing** ([Sidekiq UI](http://localhost:3000/_queues))

## Building
**Note:** There's no need to build parts of the application _manually_ for deployment, as this is done automatically by mina. 

### Building the User Interface
Although this should happen automatically, there are occasions when you just want to check, 
for instance, final chunk sizes of your Angular bundles. As certain techniques, like 
Tree Shaking won't be applied in Development environment, sizes may differ vastly (like 7 MB vs. 200 KB).

To build all Angular apps (for the time being, that's only `app/frontends/ui`) run:
```sh
bundle exec rails webpacker:compile
```

Note that `rails webpacker:compile` is executed automatically if you run `rails assets:precompile`.



## Testing
_TODO :suspect:_

## Deployment
_TODO, not working yet._

The application is deployed with [mina](https://github.com/mina-deploy/mina).

Other than mina's default behavior every call expects a variable `to=TARGET_ENV`
which identifies the taget environment.

In order to be able to deploy to a target environment you 
need to have SSH access to the remote serve.
 
Available target environments:
- `stage`
- `mpslive`

Common tasks:
```sh
# Deploy new release
mina deploy to=TARGET_ENV

# Restart sidekiq 
mina sidekiq:restart to=TARGET_ENV
```

For details see:
https://github.com/mina-deploy/mina
