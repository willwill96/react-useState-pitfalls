# React useState Pitfalls
This repo contains three examples of misused useState hooks
## Example 1
In example 1, the `dog` state variable is being modified directly, whereas the `setDog` portion of the useState hook should be used instead.
## Example 2
In example 2, only a property of the `dog` variable is being modified. That means that when `setDog` is called, the object itself is the same, so React chooses not to re-render. To fix this, ensure that you are setting the state to a new object. i.e in ES6 syntax: `setDog({...dog, name})`
## Example 3 
In example 3, state is being maintained in the parent and child component. The child component initializes its state from props passed in from the parent for the first render, but after that, the child component does not use the props. There are multiple ways to fix this issue.

One option is to hoist the state out of the child component so that all of the state is maintained in the parent and passing in callbacks for anything else necessary. For example, the rename function could be changed to:
```
const renameDog = () => {
  props.setDog({ ...props.dog, name });
};
```

Another option is to add a useEffect to the child component that updates the local state on changes to props. i.e.
```
useEffect(()=>{
  setDog(props.dog)
}, [props.dog])
```
