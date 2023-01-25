import LoaderStyles from './Loader.module.css'

export function Loader() {
  return (
    <div className={LoaderStyles.wr}>
      <div className={LoaderStyles['lds-spinner']}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
