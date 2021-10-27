
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                          Folder Stucuture 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1- Core  Module  ( “Singleton module”  Application level concept “imported only once and available throughout your app” ) (Not a business use case)
-----------------------
A- State
B- Models
C- Services [Shared Across the application]
D- Utilities [Log Module, messages Utilité, Aldo]
E- Interceptors 
F- Guards
G-Resolvers



2- Shared Module  (The Application you want to share crose your application )
-----------------------
A- Directives
B- Models
C- Pipes
D- Filters 


3- Block Module   (Not a business use case)
-----------------------
Some component needs to be singleton through out usr application just imported as once 

like

1- Navbar
2- Footer
3- sidebar 
4- Loading Screen Directive 
5- Layout of your application 
6- Toolbar

the block module and the core module they are the same concept  they are singleton through out your application and they imported once in app module ,the block module and the shared module they are the same from content view 

BLock Module can’t take feature module dependency it should be shared module 


4- Nutrition Module  (The New Story you add to your application) or (Business use cases)
---------------------------------------------------------------------------------------

Add cart button is a simple for feature module , Core Module , Block Module they are not business use cases 




--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                            Presentational and container component pattern

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Presentational component
--------------------------
1- ingredient-input
2- ingredient-list
3- nutrition-facts


Container component
-------------------
1- shell


------------------------------------------------------------
Benefits of This Approach
---------------------------

1-Better separation of concerns. You understand your app and your UI better by writing components this way.

2-Better reusability. You can use the same presentational component with completely different state sources, and turn those into separate container components that can be further reused.

3-Presentational components are essentially your app’s “palette”. You can put them on a single page and let the designer tweak all their variations without touching the app’s logic. You can run screenshot regression tests on that page.

4-This forces you to extract “layout components” such as Sidebar, Page, ContextMenu and use this.props.children instead of duplicating the same markup and layout in several container components.