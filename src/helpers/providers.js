var PROVIDERS = []
// 1. amazon 2. azure 3. google 4. alibaba 5. IBM 6. DigitalOcean 7. Packet 8. Linode 9. Rackspace 10. vultr 

// AWS
PROVIDERS.push({
    title: 'Amazon Web Services',
    val: 'ec2',
    className: 'provider-ec2',
    options: [{
        name: "region",
        label: "Region *",
        type: "dropdown",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        // SUPPORTED_PROVIDERS[3].regions.map(function(i){return {val:i.id, title: i.location}})
        //ec2_ap_northeast should be ap-northeast
        options: [
            {'val': 'ap-northeast-1', 'title': 'Tokyo'},
            {'val': 'ap-northeast-2', 'title': 'Seoul'},
            {'val': 'ap-northeast-3', 'title': 'Osaka'},
            {'val': 'ap-southeast-1', 'title': 'Singapore'},
            {'val': 'ap-southeast-2', 'title': 'Sydney'},
            {'val': 'eu-central-1', 'title': 'Frankfurt'},
            {'val': 'eu-west-1', 'title': 'Ireland'},
            {'val': 'eu-west-2', 'title': 'London'},
            {'val': 'eu-west-3', 'title': 'Paris'},
            {'val': 'eu-north-1', 'title': 'Stockholm'},
            {'val': 'ca-central-1', 'title': 'Canada Central'},
            {'val': 'sa-east-1', 'title': 'Sao Paulo'},
            {'val': 'us-east-1', 'title': 'N. Virginia'},
            {'val': 'us-west-1', 'title': 'N. California'},
            {'val': 'us-west-2', 'title': 'Oregon'},
            {'val': 'us-east-2', 'title': 'Ohio'},
            {'val': 'ap-south-1', 'title': 'Mumbai'},
            {'val': 'ap-east-1', 'title': 'Hong Kong'},
            {'val': 'cn-north-1', 'title': 'Beijing'},
            {'val': 'cn-northwest-1', 'title': 'Ningxia'},
            {'val': 'us-gov-west-1', 'title': 'GovCloud (US)'},
            {'val': 'us-gov-east-1', 'title': 'GovCloud (US-East)'}
        ]
    }, {
        name: "title",
        label: "Title *",
        type: "text",
        value: "EC2",
        defaultValue: "EC2",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "apikey",
        label: "API Key *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        helptext: "",
        helpHref: 'http://docs.mist.io/article/17-adding-amazon-ec2'
    }, {
        name: "apisecret",
        label: "API Secret *",
        type: "password",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        helptext: "",
        helpHref: 'http://docs.mist.io/article/17-adding-amazon-ec2'
    }, {
        name: "dns_enabled",
        label: "Enable DNS support",
        type: "toggle",
        value: false,
        defaultValue: false,
        show: true,
        required: false,
        helptext: ""
    }]
});

// AZURE
PROVIDERS.push({
    title: 'Azure',
    val: 'azure',
    className: 'provider-azure',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "Azure",
        defaultValue: "Azure",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "subscription_id",
        label: "Subscription ID *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter subscription id",
        helptext: "",
        helpHref: "http://docs.mist.io/article/18-adding-microsoft-azure"
    }, {
        name: "certificate",
        label: "Certificate *",
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        buttonText: "Add Certificate",
        buttonFilledText: "Certificate",
        helptext: "Your Azure certificate PEM file",
        helpHref: "http://docs.mist.io/article/18-adding-microsoft-azure"
    }]
});

// AZURE ARM
PROVIDERS.push({
    title: 'Microsoft Azure',
    val: 'azure_arm',
    className: 'provider-azure',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "Azure ARM",
        defaultValue: "Azure ARM",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "tenant_id",
        label: "Tenant ID *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter tenant id",
        helptext: "",
        helpHref: "http://docs.mist.io/article/110-adding-azure-arm"
    }, {
        name: "subscription_id",
        label: "Subscription ID *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter subscription id",
        helptext: "",
        helpHref: "http://docs.mist.io/article/110-adding-azure-arm"
    }, {
        name: "key",
        label: "Client key *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter client key",
        helptext: "",
        helpHref: "http://docs.mist.io/article/110-adding-azure-arm"
    }, {
        name: "secret",
        label: "Client secret *",
        type: "password",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter client secret",
        helptext: "",
        helpHref: "http://docs.mist.io/article/110-adding-azure-arm"
    }]
});

// GCE
PROVIDERS.push({
    title: 'Google Cloud',
    val: 'gce',
    className: 'provider-gce',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "GCE",
        defaultValue: "GCE",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "project_id",
        label: "Project ID *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter project's ID",
        helptext: '',
        helpHref: 'http://docs.mist.io/article/21-adding-google-compute-engine'
    }, {
        name: "private_key",
        label: "Private Key *",
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter private key",
        helptext: '',
        helpHref: 'http://docs.mist.io/article/21-adding-google-compute-engine'
    }, {
        name: "dns_enabled",
        label: "Enable DNS support",
        type: "toggle",
        value: false,
        defaultValue: false,
        show: true,
        required: false,
        helptext: ''
    }]
});

// ALIBABA
PROVIDERS.push({
    title: 'Alibaba Cloud',
    val: 'aliyun_ecs',
    className: 'provider-aliyunecs',
    options: [{
        name: "region",
        label: "Region *",
        type: "dropdown",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        options: [
            {'val': 'cn-qingdao', 'title': 'China North 1 (Qingdao)'},
            {'val': 'cn-beijing', 'title': 'China North 2 (Beijing)'},
            {'val': 'cn-zhangjiakou', 'title': 'China North 3 (Zhangjiakou)'},
            {'val': 'cn-huhehaote', 'title': 'China North 5 (Huhehaote)'},
            {'val': 'cn-hangzhou', 'title': 'China East 1 (Hangzhou)'},
            {'val': 'cn-shanghai', 'title': 'China East 2 (Shanghai)'},
            {'val': 'cn-shenzhen', 'title': 'China South 1 (Shenzhen)'},
            {'val': 'cn-hongkong', 'title': 'Hong Kong'},
            {'val': 'eu-central-1', 'title': 'EU Central 1 (Frankfurt)'},
            {'val': 'me-east-1', 'title': 'Middle East 1 (Dubai)'},
            {'val': 'eu-west-1', 'title': 'England (London)'},
            {'val': 'us-west-1', 'title': 'US West 1 (Silicon Valley)'},
            {'val': 'us-east-1', 'title': 'US East 1 (Virginia)'},
            {'val': 'ap-south-1', 'title': 'South Asia 1 (Mumbai)'},
            {'val': 'ap-southeast-5', 'title': 'Southeast Asia 5 (Jakarta)'},
            {'val': 'ap-southeast-3', 'title': 'Southeast Asia 3 (Kuala Lumpur)'},
            {'val': 'ap-southeast-2', 'title': 'Southeast Asia 2 (Sydney)'},
            {'val': 'ap-southeast-1', 'title': 'Southeast Asia 1 (Singapore)'},
            {'val': 'ap-northeast-1', 'title': 'Northeast Asia Pacific 1 (Tokyo)'}
        ]
    }, {
        name: "title",
        label: "Title *",
        type: "text",
        value: "Aliyun ECS",
        defaultValue: "Aliyun ECS",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "apikey",
        label: "API Key *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        helptext: ''
    }, {
        name: "apisecret",
        label: "API Secret *",
        type: "password",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        helptext: ''
    }]
});

// SOFTLAYER - IBM
PROVIDERS.push({
    title: 'IBM Cloud',
    val: 'softlayer',
    className: 'provider-softlayer',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "IBM Cloud",
        defaultValue: "IBM Cloud",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "username",
        label: "Username *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter username",
        helptext: ''
    }, {
        name: "apikey",
        label: "API Key *",
        type: "password",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter API Key",
        helptext: '',
        helpHref: 'http://docs.mist.io/article/30-adding-softlayer'
    }, {
        name: "dns_enabled",
        label: "Enable DNS support",
        type: "toggle",
        value: false,
        defaultValue: false,
        show: true,
        required: false,
        helptext: ''
    }]
});

// DIGITALOCEAN
PROVIDERS.push({
    title: 'Digital Ocean',
    val: 'digitalocean',
    className: 'provider-digitalocean',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "Digital Ocean",
        defaultValue: "Digital Ocean",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "token",
        label: "Token *",
        type: "password",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter token",
        helptext: '',
        helpHref: 'http://docs.mist.io/article/19-adding-digital-ocean'
    }, {
        name: "dns_enabled",
        label: "Enable DNS support",
        type: "toggle",
        value: false,
        defaultValue: false,
        show: true,
        required: false,
        helptext: ''
    }]
});

// PACKET
PROVIDERS.push({
    title: 'Packet',
    val: 'packet',
    className: 'provider-packet',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "Packet",
        defaultValue: "Packet",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "apikey",
        label: "API Key *",
        type: "password",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter API Key",
        helptext: '',
        helpHref: 'http://docs.mist.io/article/100-adding-packet'
    }]
});

// LINODE
PROVIDERS.push({
    title: 'Linode',
    val: 'linode',
    className: 'provider-linode',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "Linode",
        defaultValue: "Linode",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "apikey",
        label: "API Key *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter API Key",
        helptext: '',
        helpHref: 'http://docs.mist.io/article/25-adding-linode'
    }, {
        name: "dns_enabled",
        label: "Enable DNS support",
        type: "toggle",
        value: false,
        defaultValue: false,
        show: true,
        required: false,
        helptext: ''
    }]
});

// RACKSPACE
PROVIDERS.push({
    title: 'Rackspace',
    val: 'rackspace',
    className: 'provider-rackspace',
    options: [{
        name: "region",
        label: "Region *",
        type: "dropdown",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        // SUPPORTED_PROVIDERS[9].regions.map(function(i){return {val:i.id, title: i.location}})
        options: [{
            "val": "dfw",
            "title": "Dallas"
        }, {
            "val": "ord",
            "title": "Chicago"
        }, {
            "val": "iad",
            "title": "N. Virginia"
        }, {
            "val": "lon",
            "title": "London"
        }, {
            "val": "syd",
            "title": "Sydney"
        }, {
            "val": "hkg",
            "title": "Hong Kong"
        }, {
            "val": "rackspace_first_gen:us",
            "title": "US-First Gen"
        }, {
            "val": "rackspace_first_gen:uk",
            "title": "UK-First Gen"
        }]
    }, {
        name: "title",
        label: "Title *",
        type: "text",
        value: "Rackspace",
        defaultValue: "Rackspace",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "username",
        label: "Username *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter your username",
        helptext: ''
    }, {
        name: "apikey",
        label: "API Key *",
        type: "password",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter your API Key",
        helptext: '',
        helpHref: 'http://docs.mist.io/article/29-adding-rackspace'
    }, {
        name: "dns_enabled",
        label: "Enable DNS support",
        type: "toggle",
        value: false,
        defaultValue: false,
        show: true,
        required: false,
        helptext: ''
    }]
});

// VULTR
PROVIDERS.push({
    title: 'Vultr',
    val: 'vultr',
    className: 'provider-vultr',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "Vultr",
        defaultValue: "Vultr",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "apikey",
        label: "API Key *",
        type: "password",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter API Key",
        helptext: '',
        helpHref: 'http://docs.mist.io/article/72-adding-vultr'
    }, {
        name: "dns_enabled",
        label: "Enable DNS support",
        type: "toggle",
        value: false,
        defaultValue: false,
        show: true,
        required: false,
        helptext: ''
    }]
});

// DOCKER
PROVIDERS.push({
    title: 'Docker',
    val: 'docker',
    className: 'provider-docker',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "Docker",
        defaultValue: "Docker",
        show: true,
        required: true,
        errorMessage: "Please enter title",
        helptext: "",
        helpHref: "http://docs.mist.io/article/20-adding-docker"
    }, {
        name: "docker_host",
        label: "Host",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter Docker host IP or DNS name",
    }, {
        name: "docker_port",
        label: "port",
        type: "text",
        value: 2375,
        defaultValue: 2375,
        show: true,
        required: false
    }, {
        name: "authentication",
        label: "Authentication",
        type: "dropdown",
        value: "basic",
        defaultValue: "tls",
        options: [{
            val: "basic",
            title: "Basic http authentication"
        }, {
            val: "tls",
            title: "TLS"
        }],
        show: true,
        required: true,
        errorMessage: "Please choose authentication method",
    }, {
        name: "auth_user",
        label: "Username",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        helptext: '',
        showIf: {
            fieldName: "authentication",
            fieldValues: ["basic"]
        }
    }, {
        name: "auth_password",
        label: "Password",
        type: "password",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        helptext: '',
        showIf: {
            fieldName: "authentication",
            fieldValues: ["basic"]
        }
    }, {
        name: "key_file",
        label: "Key",
        type: "textarea",
        helptext: 'Client private key file',
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        showIf: {
            fieldName: "authentication",
            fieldValues: ["tls"]
        }
    }, {
        name: "cert_file",
        label: "Certificate",
        helptext: 'Client certificate file',
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        showIf: {
            fieldName: "authentication",
            fieldValues: ["tls"]
        }
    }, {
        name: "ca_cert_file",
        label: "CA Certificate",
        helptext: 'CA certificate file',
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        showIf: {
            fieldName: "authentication",
            fieldValues: ["tls"]
        }
    }, {
        name: "show_all",
        label: "Show all containers (including stopped)",
        helptext: '',
        type: "toggle",
        value: false,
        defaultValue: false,
        show: true,
        required: false
    }]
});

// MAXIHOST
PROVIDERS.push({
    title: 'Maxihost',
    val: 'maxihost',
    className: 'provider-maxihost',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "Maxihost",
        defaultValue: "Maxihost",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "token",
        label: "API token *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter the API key",
        helptext: ""
    }]
});

// G8
PROVIDERS.push({
    title: 'G8',
    val: 'gig_g8',
    className: 'provider-gigg8',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "G8",
        defaultValue: "G8",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "api_key",
        label: "API key (JWT) *",
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter the API key",
        helptext: "Created with your itsyou.online identity"
    }, {
        name: "user_id",
        label: "User ID*",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter the User ID",
        helptext: "Id of your `Account` on the G8"
    }, {
        name: "url",
        label: "API url *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter the API url",
        helptext: "‘https://<g8_name>.<domain>/’"
    }]
});



// KVM
PROVIDERS.push({
    title: 'KVM',
    val: 'libvirt',
    className: 'provider-libvirt',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "KVM",
        defaultValue: "KVM",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: 'hosts',
        itemName: 'host',
        items: [],
        label: '',
        show: true,
        required: true,
        horizontal: true,
        type: 'list',
        min: '1',
        options: [
            {
                name: "machine_hostname",
                label: "KVM hostname or IP *",
                type: "text",
                value: "",
                defaultValue: "",
                show: true,
                required: true,
                errorMessage: "Please enter the hostname or IP address",
                helptext: '',
                helpHref: 'http://docs.mist.io/article/24-adding-kvm'
            }, {
                name: "machine_name",
                label: "Alias (optional)",
                type: "text",
                placeholder: '',
                show: true,
                required: false,
                helptext: ""
            }, {
                name: "machine_key",
                label: "SSH Key",
                type: "ssh_key",
                value: "",
                defaultValue: "",
                search: "",
                show: true,
                required: true,
                options: [],
                helptext: '',
                helpHref: 'http://docs.mist.io/article/24-adding-kvm'
            }, {
                name: "machine_user",
                label: "SSH user",
                type: "text",
                value: "root",
                defaultValue: "root",
                show: true,
                required: false,
                helptext: ''
            }, {
                name: "ssh_port",
                label: "SSH port",
                type: "text",
                value: 22,
                defaultValue: 22,
                show: true,
                required: false
            }, {
                name: "images_location",
                label: "Path for *.iso images",
                type: "text",
                value: '/var/lib/libvirt/images',
                defaultValue: '/var/lib/libvirt/images',
                show: true,
                required: false,
                helptext: 'The path where your disk or iso images are located'
            }
        ]
    }]
});

// OPENSTACK
PROVIDERS.push({
    title: 'OpenStack',
    val: 'openstack',
    className: 'provider-openstack',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "OpenStack",
        defaultValue: "OpenStack",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "username",
        label: "Username *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter username"
    }, {
        name: "password",
        label: "Password *",
        type: "password",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter password"
    }, {
        name: "auth_url",
        label: "Auth Url *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter url",
        helptext: '',
        helpHref: 'http://docs.mist.io/article/27-adding-openstack'
    }, {
        name: "tenant_name",
        label: "Tenant Name *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter tenant name"
    }, {
        name: "domain_name",
        label: "Domain Name",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        helptext: 'In most cases you can leave this blank',
        helpHref: 'http://docs.mist.io/article/27-adding-openstack'
    }, {
        name: "region",
        label: "Region",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        helptext: 'Specify only if you have changed the default region',
        helpHref: 'http://docs.mist.io/article/27-adding-openstack'

    }, {
        name: "compute_endpoint",
        label: "Compute Endpoint",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        helptext: 'In most cases you will not have to specify this',
        helpHref: 'http://docs.mist.io/article/27-adding-openstack'
    }]
});

// ONAPP
PROVIDERS.push({
    title: 'OnApp',
    val: 'onapp',
    className: 'provider-onapp',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "OnApp",
        defaultValue: "OnApp",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "username",
        label: "Username *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter username",
        helptext: ''
    }, {
        name: "apikey",
        label: "Password *",
        type: "password",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter password",
        helptext: '',
        helpHref: 'http://docs.mist.io/article/155-onapp'
    }, {
        name: "host",
        label: "Host *",
        type: "text",
        value: "",
        defaultValue: "onapp.com",
        show: true,
        required: true,
        errorMessage: "Please enter OnApp host",
        helptext: '',
        helpHref: 'http://docs.mist.io/article/155-onapp'
    }, {
        name: "verify",
        label: "Verify SSL certificate",
        type: "toggle",
        value: true,
        defaultValue: true,
        show: true,
        required: false
    }]
});

// VCLOUD
PROVIDERS.push({
    title: 'VMWare vCloud',
    val: 'vcloud',
    className: 'provider-vcloud',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "VMWare vCloud",
        defaultValue: "VMWare vCloud",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "username",
        label: "Username *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter username",
        helptext: ''
    }, {
        name: "password",
        label: "Password *",
        type: "password",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter password",
        helptext: ''
    }, {
        name: "organization",
        label: "Organization *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter organization"
    }, {
        name: "host",
        label: "Hostname *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter hostname",
        helptext: '',
        helpHref: 'http://docs.mist.io/article/31-adding-vmware-vcloud'
    }, {
        name: "port",
        label: "Host port",
        type: "text",
        value: 443,
        defaultValue: 443,
        show: true,
        required: false
    }]
});

// VSPHERE
PROVIDERS.push({
    title: 'VMWare vSphere',
    val: 'vsphere',
    className: 'provider-vsphere',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "VMware vSphere",
        defaultValue: "VMware vSphere",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "host",
        label: "Hostname *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter hostname",
        helptext: '',
        helpHref: 'http://docs.mist.io/article/73-adding-vsphere'
    }, {
        name: "username",
        label: "Username *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter username"
    }, {
        name: "password",
        label: "Password *",
        type: "password",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter password"
    }, {
        name: "ca_cert_file",
        label: "CA Certificate",
        helptext: 'CA certificate file',
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        helptext: ""
    },
]
});

// OTHER SERVER
PROVIDERS.push({
    title: 'Other Server',
    val: 'bare_metal',
    className: 'provider-baremetal',
    options: [{
            name: "title",
            label: "Cloud Title *",
            type: "text",
            value: "",
            defaultValue: "",
            show: true,
            required: true,
            errorMessage: "Please enter title",
            helpHref: "http://docs.mist.io/article/28-adding-other-servers"
        },
        {
            name: 'machines',
            itemName: 'host',
            items: [],
            label: '',
            show: true,
            required: true,
            horizontal: true,
            type: 'list',
            min: '1',
            max: '5',
            options: [{
                name: "machine_hostname",
                label: "Hostname",
                type: "text",
                placeholder: 'DNS or IP',
                show: true,
                required: true,
                helptext: '',
                helpHref: ''
            }, {
                name: "machine_name",
                label: "Alias (optional)",
                type: "text",
                placeholder: '',
                show: true,
                required: false,
                helptext: ""
            }, {
                name: "operating_system",
                label: "Operating System",
                type: "dropdown",
                value: "unix",
                defaultValue: "unix",
                show: true,
                required: false,
                options: [{
                    title: "Unix",
                    val: "unix"
                }, {
                    title: "Windows",
                    val: "windows"
                }]
            }, {
                name: "machine_key",
                label: "SSH Key",
                type: "ssh_key",
                value: "",
                search: "",
                defaultValue: "",
                show: true,
                required: false,
                options: [],
                showIf: {
                    fieldName: "operating_system",
                    fieldValues: ["unix"]
                }
            }, {
                name: "machine_user",
                label: "User",
                type: "text",
                value: "root",
                defaultValue: "root",
                show: false,
                required: false,
                errorMessage: "Please enter user",
                showIf: {
                    fieldName: "machine_key",
                    fieldExists: true
                }
            }, {
                name: "machine_port",
                label: "Port",
                type: "text",
                value: 22,
                defaultValue: 22,
                show: false,
                required: false,
                errorMessage: "Please enter port",
                showIf: {
                    fieldName: "machine_key",
                    fieldExists: true
                }
            }, {
                name: "remote_desktop_port",
                label: "Remote Desktop Port",
                type: "text",
                value: 3389,
                defaultValue: 3389,
                errorMessage: "Please enter remote desktop's port",
                show: false,
                required: true,
                showIf: {
                    fieldName: "operating_system",
                    fieldValues: ["windows"]
                }
            }, {
                name: "monitoring",
                label: "Enable monitoring",
                type: "toggle",
                value: false,
                defaultValue: false,
                show: true,
                required: false
            }]
        },
    ]
});


// KUBEVIRT
PROVIDERS.push({
    title: 'KubeVirt',
    val: 'kubevirt',
    className: 'provider-kubevirt',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "KubeVirt",
        defaultValue: "KubeVirt",
        show: true,
        required: true,
        errorMessage: "Please enter title"
    }, {
        name: "host",
        label: "Hostname or IP *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter Kubernetes API host IP or DNS name",
    }, {
        name: "port",
        label: "Port *",
        type: "text",
        value: 6443,
        defaultValue: 6443,
        show: true,
        required: false
    }, {
        name: "ca_cert_file",
        label: "CA Certificate",
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        helptext:"Kubernetes uses self signed certificates and it is best practice to add your CA certificate as trusted. If you don't do that, any untrusted certificate warnings will be silenced."
    }, {
        name: "authentication",
        label: "Authentication",
        type: "dropdown",
        value: "basic",
        defaultValue: "tls",
        options: [{
            val: "basic",
            title: "Basic HTTP"
        }, {
            val: "tls",
            title: "TLS"
        }, {
            val: "tokenbearer",
            title: "Token Bearer",
        }],
        show: true,
        required: true,
        errorMessage: "Please choose authentication method",
    }, {
        name: "username",
        label: "Username *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        helptext: "",
        showIf: {
            fieldName: "authentication",
            fieldValues: ["basic"]
        }
    }, {
        name: "password",
        label: "Password *",
        type: "password",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        helptext: "",
        showIf: {
            fieldName: "authentication",
            fieldValues: ["basic"]
        }
    }, {
        name: "cert_file",
        label: "User Certificate *",
        helptext: 'Certificate file for TLS auth.',
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        showIf: {
            fieldName: "authentication",
            fieldValues: ["tls"]
        }
    }, {
        name: "key_file",
        label: "Private Key *",
        type: "textarea",
        helptext: 'Private Key matching the above certificate',
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        showIf: {
            fieldName: "authentication",
            fieldValues: ["tls"]
        }
    }, {
        name: "token",
        label: "Bearer Token *",
        helptext: '',
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: false,
        showIf: {
            fieldName: "authentication",
            fieldValues: ["tokenbearer"]
        }
    }]
});

// LXD
PROVIDERS.push({
    title: 'LXD',
    val: 'lxd',
    className: 'provider-lxd',
    options: [{
        name: "title",
        label: "Title *",
        type: "text",
        value: "LXD",
        defaultValue: "LXD",
        show: true,
        required: true,
        errorMessage: "Please enter title",
        helptext: "",
        helpHref: "https://docs.mist.io/article/174-lxd"
    }, {
        name: "host",
        label: "Host *",
        type: "text",
        value: "",
        defaultValue: "",
        show: true,
        required: true,
        errorMessage: "Please enter LXD host IP or DNS name",
    }, {
        name: "port",
        label: "Port *",
        type: "text",
        value: 8443,
        defaultValue: 8443,
        show: true,
        required: true
    }, {
        name: "key_file",
        label: "Client Private Key *",
        type: "textarea",
        helptext: "",
        value: "",
        defaultValue: "",
        show: true,
        required: true
    }, {
        name: "cert_file",
        label: "Client Certificate *",
        helptext: "",
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: true
    }, {
        name: "ca_cert_file",
        label: "CA Certificate",
        helptext: "",
        type: "textarea",
        value: "",
        defaultValue: "",
        show: true,
        required: false
    }]
});

export default PROVIDERS;