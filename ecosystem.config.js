module.exports = {
  apps : [{
    name: 'server-practice',
    script: './index.js'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-3-19-222-196.us-east-2.compute.amazonaws.com',
      key:   '~/.ssh/h.pem',
      ref  : 'origin/master',
      repo : 'https://github.com/reperez120/server-practice.git',
      path : '/home/ubuntu/server-practice',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
