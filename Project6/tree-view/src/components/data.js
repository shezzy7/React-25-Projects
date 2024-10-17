export const menus = [
    {
      label: "Home",
      to: "/",
      children:[
        {
          label:"about",
          to:"/about",
          children:[
            {
              label:"linedin",
              to:".linkedin",
              children:[
                {
                  label:"followers",
                  to:'',children: [
                    {
                      label: "Details",
                      to: "details",
                      children: [
                        {
                          label: "Location",
                          to: "location",
                          children: [
                            {
                              label: "City",
                              to: "city",
                              children: [
                                {
                                  label: "Details",
                                  to: "details",
                                  children: [
                                    {
                                      label: "Location",
                                      to: "location",
                                      children: [
                                        {
                                          label: "City",
                                          to: "city",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: "Profile",
      to: "/profile",
      children: [
        {
          label: "Details",
          to: "details",
          children: [
            {
              label: "Location",
              to: "location",
              children: [
                {
                  label: "City",
                  to: "city",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Settings",
      to: "/settings",
      children: [
        {
          label: "Account",
          to: "account",
        },
        {
          label: "Security",
          to: "security",
          children: [
            {
              label: "Login",
              to: "login",
            },
            {
              label: "Register",
              to: "register",
              children : [
                  {
                      label : 'Random data',
                      to : ''
                  }
              ]
            },
            {
              label:'Random data2',
              to:''
            }
          ],
        },
      ],
    },
  ];
  
  export default menus;